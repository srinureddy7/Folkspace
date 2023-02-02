import { TrendingUp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import moment from "moment";

const Trending = () => {
  return (
    <section className="py-8">
      <div className="main-container">
        <div className="flex gap-4 items-center font-semibold">
          <div className="h-8 w-8 rounded-full flex justify-center items-center animate-pulse bg-theme">
            <TrendingUp className="!text-white" />
          </div>
          <p>Trending on Folkspace</p>
        </div>
        <div className="w-full mt-6">
          <Grid container spacing={3}>
            {cards?.map((item) => (
              <Grid item lg={4} key={item}>
                <div className="w-full h-full border-2 flex pt-4 rounded-md shadow-sm">
                  <div className="w-1/6 h-full flex justify-center">
                    <div className="h-12 w-12 rounded-full text-gray-500 flex justify-center items-center">
                      <p className="text-2xl font-semibold tracking-wide">01</p>
                    </div>
                  </div>
                  <div className="w-5/6 h-full pl-4">
                    <div className="flex gap-4 items-center">
                      <div className="h-8 w-8 rounded-full bg-slate-600 overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src="https://images.unsplash.com/photo-1605951654160-a17d20182ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                          alt=""
                        />
                      </div>
                      <p className="font-medium text-sm tracking-wide text-gray-700">
                        Jennifer Lopez
                      </p>
                    </div>
                    <p className="py-2 font-bold tracking-wide">
                      Why the Google layoffs are about personal ambition and
                      poor leadership
                    </p>
                    <div className="pb-6">
                      <p className="text-sm text-gray-600">
                        {moment(new Date().toString()).format("lll")}
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Trending;

const cards = [1, 2, 3, 4, 5, 6];
