export default function Home() {
  return (
    <center>
    <div className="container">
      <img 
        src="/images/top-img.png"
        width={584}
        alt="image"
        className="top-image"
      />
      <div className="content-section">
        <div className="first-block">
          <h1>Добро пожаловать в "Мой размер"!</h1>
          <h4>Ваш надежный помощник в мире моды!</h4>
        </div>
        
        <div className="second-block">
          <p>
          Ищете идеальный размер одежды или обуви? Мы здесь, чтобы помочь!
          "Мой размер" - это удобный конвертер размеров, который позволяет легко переводить размеры между различными странами.
          </p>
        </div>
      </div>
      </div>
    </center>
  );
}
