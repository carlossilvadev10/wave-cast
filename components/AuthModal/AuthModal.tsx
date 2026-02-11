import Link from "next/link";

type AuthModalProps = {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
}

const AuthModal = ({ showModal, setShowModal, isLogin, setIsLogin }: AuthModalProps) => {
    if (!showModal) return null;

    return (
        <div className = "flex items-center justify-center bg-black/80 backdrop-blur-sm w-full h-screen fixed inset-0 z-50">
            <div className = "relative bg-[#2d333c] border border-white/10 rounded-3xl p-10 w-112.5 md:w-125 shadow-2xl animate-fadeIn">
                <button className = "absolute top-5 right-5 text-4xl cursor-pointer text-white hover:text-(--primary) transition-all duration-300" onClick = {() => setShowModal(false)}>
                    <i className = "bi bi-x"></i>
                </button>
                <h2 className = "text-3xl text-center font-semibold mb-6 text-white">
                    {isLogin ? "Bienvenido de nuevo" : "Crear cuenta"}
                </h2>
                <form action = "#" className = "flex flex-col gap-4">
                    {
                        !isLogin && (
                            <input type = "text" name = "name" id = "name" placeholder = "Nombre completo" minLength = {3} maxLength = {50} pattern = "^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$" autoComplete = "name" spellCheck = "false" className = "w-full bg-gray-800 border-0 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--primary) transition-all duration-200" required />
                        )
                    }
                    <input type = "email" name = "email" id = "email" placeholder = "Correo electrónico" autoComplete = "email" pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className = "w-full bg-gray-800 border-0 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--primary) transition-all duration-200" required />
                    <input type = "password" name = "password" id = "password" placeholder = "Contraseña" minLength = {8} maxLength = {100} autoComplete = "current-password" className = "w-full bg-gray-800 border-0 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--primary) transition-all duration-200" required />
                    <button type = "submit" className = "w-full text-black mt-4 py-3 rounded-xl font-semibold cursor-pointer bg-(--primary) hover:bg-(--primary)/80 transition-all duration-300">
                        {isLogin ? "Iniciar sesión" : "Crear cuenta"}
                    </button>
                </form>
                <p className = "text-center text-sm mt-4 text-white/70 font-semibold">
                    {
                        isLogin ? (
                            <>
                                ¿No tienes cuenta?{" "}
                                <button type = "button" className = "text-(--primary) cursor-pointer hover:underline" onClick = {() => setIsLogin(false)}>
                                    Regístrate
                                </button>
                            </>
                        ) : (
                            <>
                                ¿Ya tienes una cuenta?{" "}
                                <button type = "button" className = "text-(--primary) cursor-pointer hover:underline" onClick = {() => setIsLogin(true)}>
                                    Inicia sesión
                                </button>
                            </>
                        )
                    }
                </p>
                <p className = "text-center text-sm text-white/50 pt-4 mt-4 border-t border-white/10">
                    Al {isLogin ? "iniciar sesión" : "registrarte"} en <strong>WaveCast</strong>, aceptas nuestros{" "}
                    <Link href = "/" className = "text-(--primary) hover:underline">
                        Términos de uso
                    </Link>{" "}
                    y{" "}
                    <Link href = "/" className = "text-(--primary) hover:underline">
                        Política de privacidad
                    </Link>.
                </p>
            </div>
        </div>
    );
};

export default AuthModal;