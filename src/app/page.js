export default function Home() {
  return (
    <div className="relative content-section flex justify-center w-full">
      <div className="container bg-white/10 backdrop-blur-sm py-8 w-full rounded-lg ">
        <div className="p-6">
          <div className="first-block mb-8 text-center">
            <h1 className="drop-shadow-md">
              Добро пожаловать в "Мой размер"!
            </h1>
            <h4>
              Ваш надежный помощник в мире моды!
            </h4>
          </div>
          
          <div className="second-block bg-white/50 rounded-lg p-6 backdrop-blur-sm text-center">
            <p>
              Ищете идеальный размер одежды или обуви? Мы здесь, чтобы помочь! <br></br>
              "Мой размер" - это удобный конвертер размеров, который позволяет легко
              переводить размеры между различными странами.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}