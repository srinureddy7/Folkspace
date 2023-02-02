import { Hero, Trending } from "../components/home";

import { PublicLayout } from "../layouts";

const Home = () => {
  return (
    <section>
      <PublicLayout title="Folkspace - Where good ideas find you.">
        <>
          <Hero />
          <Trending />
        </>
      </PublicLayout>
    </section>
  );
};

export default Home;
