import React, { useRef, useState } from "react";
import QRCode from "qrcode";
import styled from "styled-components";
import TitleRow from "../components/TitleRow";

const GeneratorContainer = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Controls = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
`;

const Control = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  cursor: pointer;
`;

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 2rem auto;
`;
function QRCodeGenerator() {
  const canvasRef = useRef(null);

  const [text, setText] = useState("");
  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#ffffff");
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState(20);
  const [generated, setGenerated] = useState(false);

  const generateQRCode = async () => {
    if (!text.trim()) return;

    const canvas = canvasRef.current;

    try {
      await QRCode.toCanvas(canvas, text, {
        width: 1000,
        margin: 4,
        errorCorrectionLevel: "H",
        color: {
          dark: foreground,
          light: background,
        },
      });

      if (logo) {
        const image = new Image();
        image.src = logo;

        image.onload = () => {
  const ctx = canvas.getContext("2d");

  const maxSize = canvas.width * (logoSize / 100);

  const aspectRatio = image.width / image.height;

  let logoWidth;
  let logoHeight;

  if (aspectRatio >= 1) {
    logoWidth = maxSize;
    logoHeight = maxSize / aspectRatio;
  } else {
    logoHeight = maxSize;
    logoWidth = maxSize * aspectRatio;
  }

  const x = (canvas.width - logoWidth) / 2;
  const y = (canvas.height - logoHeight) / 2;

  const padding = maxSize * 0.12;

  ctx.fillStyle = background;
  ctx.fillRect(
    x - padding,
    y - padding,
    logoWidth + padding * 2,
    logoHeight + padding * 2
  );

  ctx.drawImage(
    image,
    x,
    y,
    logoWidth,
    logoHeight
  );

  setGenerated(true);
};
      } else {
        setGenerated(true);
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setLogo(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const downloadQRCode = () => {
    const canvas = canvasRef.current;

    if (!canvas || !generated) return;

    const link = document.createElement("a");

    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div>
      <TitleRow title="QR Code Generator" />

      <GeneratorContainer>
        <p>
          Enter a URL or text and customize your QR code.
        </p>

        <Input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="https://markcliffordmusic.com"
        />

        <Controls>
          <Control>
            QR Color
            <input
              type="color"
              value={foreground}
              onChange={(event) =>
                setForeground(event.target.value)
              }
            />
          </Control>

          <Control>
            Background
            <input
              type="color"
              value={background}
              onChange={(event) =>
                setBackground(event.target.value)
              }
            />
          </Control>

          <Control>
            Logo
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleLogoUpload}
            />
          </Control>

          <Control>
            Logo Size: {logoSize}%
            <input
              type="range"
              min="10"
              max="25"
              value={logoSize}
              onChange={(event) =>
                setLogoSize(Number(event.target.value))
              }
            />
          </Control>
        </Controls>

        <ButtonRow>
          <Button onClick={generateQRCode}>
            Generate QR Code
          </Button>

          {generated && (
            <Button onClick={downloadQRCode}>
              Download PNG
            </Button>
          )}
        </ButtonRow>

        <Canvas
          ref={canvasRef}
          // width="1000"
          // height="1000"
        />
      </GeneratorContainer>
    </div>
  );
}

export default QRCodeGenerator;