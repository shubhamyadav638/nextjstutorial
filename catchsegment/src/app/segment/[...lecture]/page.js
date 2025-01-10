'use client';

import { useState, useEffect } from 'react';

function Lecture({ params }) {
  const [lectureParams, setLectureParams] = useState();

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params; 
      setLectureParams(resolvedParams);
    }
    resolveParams();
  }, [params]);

  if (!lectureParams) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h2>Day: {lectureParams.lecture[0]}</h2>
      <h4>Lecture: {lectureParams.lecture[1]}</h4>
      <h4>Topic: {lectureParams.lecture[2]}</h4>
    </div>
  );
}

export default Lecture;
