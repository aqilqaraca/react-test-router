import Header from "../components/Header";

export default function Root({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
