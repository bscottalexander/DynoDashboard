import * as React from "react";
import BarGraph from "../components/bar-graph";
import PieGraph from "../components/pie-graph";
import styled from "@emotion/styled";
import Table from "../components/table";
import { faker } from "@faker-js/faker";

const Root = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

const ChartContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 50,
  "> *": {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    maxWidth: 500,
    aspectRatio: 1,
    border: "1px solid #e5e7eb",
    borderRadius: 4,
    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
  },
  flexWrap: "wrap",
});

const TableContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function DashboardPage() {
  const [pages, setPages] = React.useState();

  const pollForData = () => {
    const data = [
      {
        name: "HomePage",
        views: faker.number.int({max: 9999}),
        clicks: faker.number.int({max: 9999}),
        bounces: faker.number.int({max: 9999}),
        leads: faker.number.int({max: 9999}),
      },
      {
        name: "About Us",
        views: faker.number.int({max: 9999}),
        clicks: faker.number.int({max: 9999}),
        bounces: faker.number.int({max: 9999}),
        leads: faker.number.int({max: 9999}),
      },
      {
        name: "News",
        views: faker.number.int({max: 9999}),
        clicks: faker.number.int({max: 9999}),
        bounces: faker.number.int({max: 9999}),
        leads: faker.number.int({max: 9999}),
      },
    ];

    setPages(data);
  };

  React.useEffect(() => {
    pollForData();

    const timeoutId = setInterval(pollForData, 10000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <Root>
      {pages ? (
        <>
          <ChartContainer>
            <BarGraph
              title="Clicks By Page"
              categories={pages.map((page) => page.name)}
              series={[
                {
                  data: pages.map((page) => page.clicks),
                },
              ]}
            />
            <PieGraph
              title="Page Views"
              labels={pages.map((page) => page.name)}
              series={pages.map((page) => page.views)}
            />
          </ChartContainer>
          <TableContainer>
            <Table
              title="Additional Page Metrics"
              columns={[
                "Page Name",
                "Views",
                "Clicks",
                "Bounces",
                "Leads Generated",
              ]}
              rows={pages.map((page) => [
                page.name,
                page.views,
                page.clicks,
                page.bounces,
                page.leads,
              ])}
            />
          </TableContainer>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Root>
  );
}

export default DashboardPage;
