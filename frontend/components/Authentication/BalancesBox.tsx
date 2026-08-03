import { Paper, DataRow } from "@ggvigroup/component-library";

const BalancesBox = ({ gGVIBalance }) => {

  return (
    <Paper> {/*style={{ height: "11vh" }}>*/}
      <DataRow
        balance={`${parseFloat(gGVIBalance).toFixed(4)} gGVI`}
        title="Your Balance"
      />
    </Paper>
  );
};

export default BalancesBox;