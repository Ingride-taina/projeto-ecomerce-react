"use client";

import { useState, useEffect } from "react";
import background from "../assets/background.png";

type User = {
  email: string;
  password: string;
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    setErrors({});
    setMessage("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  }, [isLogin]);

  function validate(): boolean {
    let newErrors: { [key: string]: string } = {};

    if (!email) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória";
    } else if (password.length < 6) {
      newErrors.password = "Mínimo 6 caracteres";
    }

    if (!isLogin) {
      if (!repeatPassword) {
        newErrors.repeatPassword = "Repita a senha";
      } else if (password !== repeatPassword) {
        newErrors.repeatPassword = "As senhas não coincidem";
      }

      const users: User[] = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

      if (users.find((u) => u.email === email)) {
        newErrors.email = "E-mail já cadastrado";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!validate()) return;

    const users: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    if (isLogin) {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setMessage("Credenciais inválidas");
        return;
      }

      setMessage("Login realizado com sucesso!");
    } else {
      const newUser = { email, password };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setMessage("Cadastro realizado com sucesso!");
      setIsLogin(true);
    }
  }

  return (
    <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${background.src})`,
    }}
  >
      <div className="w-[410px] bg-white/0 backdrop-blur-2xl border border-white/20 rounded-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        
        <div className="flex mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 rounded-t-xl text-lg font-bold tracking-wide transition ${
  isLogin
    ? "cursor-pointer bg-[#3f7c85] text-white"
    : "bg-transparent text-white/70"
}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 rounded-t-xl text-lg font-bold tracking-wide transition ${
  !isLogin
    ? "cursor-pointer bg-[#3f7c85] text-white"
    : "bg-transparent text-white/70"
}`}
          >
            Cadastro
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-xs text-white/70 uppercase">
              E-mail
            </label>
            <input
              type="email"
              className="w-full mt-1 p-3 rounded-md bg-white/60 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 border border-white/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-300 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="text-xs text-white/70 uppercase">
              Senha
            </label>
            <input
              type="password"
              className="w-full mt-1 p-3 rounded-md bg-white/60 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 border border-white/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-300 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="text-xs text-white/70 uppercase">
                Repetir Senha
              </label>
              <input
                type="password"
                className="w-full mt-1 p-3 rounded-md bg-white/60 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/60 border border-white/30"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              {errors.repeatPassword && (
                <p className="text-red-300 text-xs mt-1">
                  {errors.repeatPassword}
                </p>
              )}
            </div>
          )}

          {isLogin && (
            <div className="text-right text-sm text-white/70 hover:text-white cursor-pointer">
              esqueceu a senha?
            </div>
          )}

          <button
  type="submit"
  className="w-40 mx-auto block py-3 mt-4 rounded-md bg-[#5da9e9] hover:bg-[#4a98d9] text-white font-semibold transition duration-300 shadow-lg cursor-pointer"
>
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>

          {message && (
            <p className="text-center text-sm text-white mt-3">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
