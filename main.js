onload = () =>{
    document.body.classList.remove("container");


    const audio = document.getElementById("flores-amarillas.mp3");
      const audioButton = document.getElementById("audioButton");

      // Agregar evento de click al botón para reproducir/pausar la música
      audioButton.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          audioButton.textContent = "Pausar Música";
        } else {
          audio.pause();
          audioButton.textContent = "Reproducir Música";
        }
      });
};

