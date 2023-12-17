const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error("프로필을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderLists() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("폴더 목록을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getLinks(folderId = "") {
  const query = folderId ? `folderId=${folderId}` : `folderId=`;
  const response = await fetch(`${BASE_URL}/users/1/links?${query}`);
  if (!response.ok) {
    throw new Error("링크 데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function handleCopyClipBoard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
}

export async function validateOverlapEmail(email = "") {
  const formData = JSON.stringify({
    email: email,
  });
  const response = await fetch(`${BASE_URL}/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("이미 존재하는 이메일입니다.");
  }
  const body = await response.json();
  return body;
}
