import { Outlet } from "react-router-dom";
import Card from "../../../components/Card";

export default function Product() {
  return (
    <>
      <main>
        <section className="mt20">
          <Card />
        </section>
      </main>
      <Outlet />
    </>
  );
}
