import React, { useState } from "react";
import QRCode from "qrcode";
import styled from "styled-components";
import TitleRow from "../components/TitleRow";
import TextContainer from "../components/TextContainer";

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

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  cursor: pointer;
`;

const QRImage = styled.img`
  display: block;
  width: 300px;
  max-width: 100%;
  margin: 2rem auto;
`;

function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = async () => {
    if (!text.trim()) return;

    try {
      const url = await QRCode.toDataURL(text, {
        width: 1000,
        margin: 2,
        errorCorrectionLevel: "H",
      });

      setQrCode(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qr-code.png";
    link.click();
  };

  const copyText = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
  };

  return (
  <div>
    <TitleRow title="QR Code Generator" />

    <GeneratorContainer>
      <p>
        Enter a URL or any text below to generate a downloadable QR code.
      </p>

      <Input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="https://markpascucciclifford.com"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            generateQRCode();
          }
        }}
      />

      <ButtonRow>
        <Button onClick={generateQRCode}>
          Generate QR Code
        </Button>

        <Button onClick={copyText}>
          Copy Text
        </Button>

        {qrCode && (
          <Button onClick={downloadQRCode}>
            Download PNG
          </Button>
        )}
      </ButtonRow>

      {qrCode && (
        <QRImage
          src={qrCode}
          alt={`QR code for ${text}`}
        />
      )}
    </GeneratorContainer>
  </div>
)};