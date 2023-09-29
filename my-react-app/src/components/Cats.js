// src/components/Cats.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // API 엔드포인트 주소
    const apiUrl = 'http://localhost:3000/cats';

    // Axios를 사용하여 GET 요청을 보냅니다.
    axios.get(apiUrl)
      .then((response) => {
        // 성공적으로 데이터를 가져온 경우 상태에 저장합니다.
        setCats(response.data);
      })
      .catch((error) => {
        console.error('API 호출 중 오류 발생:', error);
      });
  }, []);

  return (
    <div>
      <h2>Cats</h2>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cats;
