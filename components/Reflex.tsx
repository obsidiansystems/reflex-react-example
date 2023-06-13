'use client';

import * as react from 'react';
import { useEffect, useCallback, useRef, useState } from 'react';

export default function Reflex() {
  const [val, setVal] = useState(null);
  const ValComp = () => {
    if(val) {
      return <val.comp test="test" />
    } else {
      return <i>Blah</i>
    }
  };
  useEffect((ref) => {
    const jsaddleRoot = "http://localhost:3001";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", jsaddleRoot + "/jsaddle.js");
    xhr.onload = () => {
      eval("(function(JSADDLE_ROOT, arg) {" + xhr.response + "})")(jsaddleRoot, { react: react, setVal: setVal });
    };
    //TODO: xhr.onerror
    xhr.send();
  }, []);
  return <div ref={(ref) => console.log(ref)}><ValComp /></div>
}
