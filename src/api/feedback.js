import { instance } from "./auth";

export async function getAllReviews(params) {
  const { data } = await instance.get("/feedback", {
    params,
  });
  return data;
}

export async function createReview(review) {
  const { data } = await instance.post("/feedback", review);
  return data;
}

export async function createReviewQuiz(quizId, {review}) {
  const { data } = await instance.post(`/feedback/${quizId}`, {review});
  return data;
}



