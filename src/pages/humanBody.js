import { useEffect, useRef, useState } from "react";
import "./styles/humanbody.css";
import { Container } from "react-bootstrap";

export default function ClickableBody() {
  const objectRef = useRef(null);
  const [part, setPart] = useState("");

  useEffect(() => {
    const objectElement = objectRef.current;

    // Trigger saat file SVG selesai dimuat
    objectElement.addEventListener("load", () => {
      const svgDoc = objectElement.contentDocument; // isi dokumen SVG
      const svgRoot = svgDoc.querySelector("svg");

      if (!svgRoot) {
        console.error("SVG tidak ditemukan di dalam <object>");
        return;
      }

      // Ambil semua bagian tubuh yang punya ID
      const parts = svgRoot.querySelectorAll("[id]");

      parts.forEach((part) => {
        part.style.cursor = "pointer"; // beri tanda klik
        part.addEventListener("click", (e) => {
          e.stopPropagation();
          const humanPart = part.id.replace(/_\d+$/, "");
          setPart(humanPart);
          console.log("Bagian diklik:", part.id);

          // Contoh highlight
          parts.forEach((p) => (p.style.fill = "")); // reset warna
          part.style.fill = "blue";
        });
      });

      console.log("Total bagian terdeteksi:", parts.length);
    });
  }, []);
  return (
    <Container fluid className="p-3">
      <div className="row">
        <div className="col-5">
          <object
            ref={objectRef}
            type="image/svg+xml"
            data="Body.svg"
            aria-label="Human Body Diagram"
            style={{ width: "auto", height: "auto" }}
          >
            Your browser does not support SVG
          </object>
        </div>
        <div className="col-5">
          <h1>{part}</h1>
          <form></form>
        </div>
      </div>
    </Container>
  );
}
