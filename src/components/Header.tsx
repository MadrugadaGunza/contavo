const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-30 h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4">

            {/* LADO ESQUERDO */}
            <div className="flex items-center gap-4">
                {/* Caso adiciones o botão de menu mobile futuramente */}
                {/* <button className="md:hidden p-2 rounded bg-gray-800 text-white">
          <Menu className="h-6 w-6" />
        </button> */}
            </div>

            {/* LADO DIREITO */}
            <button className="flex items-center text-gray-500 hover:text-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                </svg>
            </button>

        </header>
    );
};

export default Header;
