export function AnimatedTitle({ text }) {
  const getRandomColor = () => {
    const colors = [
      "#FF5733", // red
      "#33FF57", // green
      "#3357FF", // blue
      "#FF33A6", // pink
      "#FFB533", // orange
      "#33FFF6", // cyan
      "#DA33FF", // purple
      "#FFE333", // yellow
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <h1
      className={
        "text-5xl md:text-7xl font-bold mb-6 flex flex-wrap justify-center pt-8 pb-8"
      }
    >
      {text.split("").map((char, index) => {
        const rotateDirection =
          Math.random() > 0.5 ? "hover:rotate-6" : "hover:-rotate-6";

        return (
          <span
            key={index}
            className={`inline-block transition-transform duration-300 ease-in-out hover:scale-110 ${rotateDirection}`}
            onMouseEnter={(e) => {
              const newColor = getRandomColor();
              e.target.style.color = newColor;
            }}
            onMouseLeave={(e) => {
              setTimeout(() => {
                e.target.style.color = "inherit";
              }, 1000);
            }}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
}
