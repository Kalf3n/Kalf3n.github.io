function viewFullImage(imageSrc, dishName) {
  const imageWindow = window.open("", "_blank", "width=800,height=600");
  imageWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${dishName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #181a20;
          font-family: 'Montserrat', Arial, sans-serif;
        }
        .image-container {
          max-width: 94vw;
          max-height: 90vh;
          text-align: center;
          position: relative;
        }
        img {
          max-width: 100%;
          max-height: 70vh;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        h2 {
          color: #f9c846;
          margin-top: 2.5vh;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
          font-size: 2.5rem;
        }
        .close-btn {
          position: absolute;
          top: 2vw;
          right: 2vw;
          background: #f9c846;
          color: #181a20;
          border: none;
          border-radius: 50%;
          width: 12vw;
          height: 12vw;
          min-width: 56px;
          min-height: 56px;
          max-width: 50px;
          max-height: 50px;
          font-size: 3rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: background 0.3s ease;
          z-index: 2;
        }
        .close-btn:hover {
          background: #e0b93a;
        }
        @media (max-width: 600px) {
          .close-btn {
            width: 16vw;
            height: 16vw;
            font-size: 2.5rem;
            min-width: 48px;
            min-height: 48px;
          }
          h2 {
            font-size: 1.4rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="image-container">
        <button class="close-btn" onclick="window.close()">×</button>
        <img src="${imageSrc}" alt="${dishName}">
        <h2>${dishName}</h2>
      </div>
    </body>
    </html>
  `);
  imageWindow.document.close();
}
