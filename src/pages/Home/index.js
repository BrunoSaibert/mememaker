import React, { useState, useEffect, useRef } from "react";
import qs from "qs";

import logo from "../../images/logo.svg";

import * as S from "./styles";

function Home() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [generatedMeme, setGeneratedMeme] = useState(null);

  const formRef = useRef(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://api.imgflip.com/get_memes");
      const {
        data: { memes },
      } = await resp.json();

      setTemplates(memes);

      // alert(process.env.USERNAME);
    })();
  }, []);

  const handleInputChange = (index) => (e) => {
    const newValues = boxes;
    newValues[index] = e.target.value;
    setBoxes(newValues);

    if (e.target.value) {
      apiMeme();
    }
  };

  const handleSelectedTemplate = (template) => {
    setSelectedTemplate(template);
    setBoxes([]);

    if (formRef.current) {
      formRef.current.reset();
    }

    setGeneratedMeme(template.url);
  };

  const apiMeme = async () => {
    const params = qs.stringify({
      template_id: selectedTemplate.id,
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
      boxes: boxes.map((text) => ({ text })),
    });

    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);

    const {
      data: { url },
    } = await resp.json();

    setGeneratedMeme(url);
  };

  return (
    <S.Container>
      <img src={logo} alt="MemeMaker" />

      <S.Card>
        <h2>Selecione um template</h2>

        <S.Templates>
          {templates.map((template) => (
            <button
              key={template.id}
              type="buttom"
              onClick={() => handleSelectedTemplate(template)}
              className={template.id === selectedTemplate?.id ? "selected" : ""}
            >
              <img src={template.url} alt={template.name} />
            </button>
          ))}
        </S.Templates>

        {selectedTemplate && (
          <>
            <h2>Textos</h2>

            <S.Form ref={formRef}>
              {new Array(selectedTemplate.box_count)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    placeholder={`Text #${index + 1}`}
                    onChange={handleInputChange(index)}
                  />
                ))}
            </S.Form>

            <h2>Meme</h2>

            <a
              href={generatedMeme}
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              <img src={generatedMeme} alt="Generated Meme" />
            </a>
          </>
        )}
      </S.Card>
    </S.Container>
  );
}

export default Home;
