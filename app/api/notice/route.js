export default async function GET() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/all/notice`);
      if (!res.ok) throw new Error("Failed to fetch notices");
      return await res.json();
    } catch (error) {
      console.error("Notice API Fetch Error:", error);
      return { data: [] }; // Return default data to prevent crashes
    }
  }