// app/lib/api.ts

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  // Gunakan fallback string kosong "" jika .env belum terbaca
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || ""; 
  
  const res = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store", 
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {
      console.log("Fetch Error:", e);
    }
    throw new Error(errorMessage);
  }

  return res.json();
}

export function getImageUrl(path: string) {
  if (!path) return ""; 
  if (path.startsWith("https")) return path; 
  
  const root = process.env.NEXT_PUBLIC_API_ROOT || "";
  
  // Menambahkan '/' secara eksplisit agar hostname dan folder tidak menempel
  // Contoh: https://domain.com + / + uploads/file.png
  return `${root}/${path}`;
}