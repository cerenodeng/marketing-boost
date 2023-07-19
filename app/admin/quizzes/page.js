import AdminMain from "@/components/AdminMain";

async function refreshQuizzes(term) {
  'use server';
  const data = [];

  return data;
}

async function deleteQuiz(id) {
  'use server';
  const data = [];

  return data;
}

export default function Quizzes() {
  const originalItems = [
    { id: 1, title: 'Quizz One', start_date: '2023-7-18', start_time: '9:00', end_date: '2023-7-19', end_time: '12:00' },
    { id: 2, title: 'Quizz Two', start_date: '2023-8-18', start_time: '10:00', end_date: '2023-8-19', end_time: '13:00' },
    { id: 3, title: 'Quizz Three', start_date: '2023-9-18', start_time: '11:00', end_date: '2023-9-19', end_time: '14:00' },
  ];

  return (
    <AdminMain originalItems={originalItems} refreshQuizzes={refreshQuizzes} deleteQuiz={deleteQuiz} />
  );
}