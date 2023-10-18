import Container from "@/components/Container";

async function getData() {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div>
      <p>Data from server component: {data.ip}</p>
      <Container />
    </div>
  );
}
