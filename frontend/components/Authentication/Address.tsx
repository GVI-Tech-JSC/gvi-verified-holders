import { SecondaryButton } from "@ggvigroup/component-library";

const Address = ({ address }) => {

  return (
    <SecondaryButton
      size="large"
      variant="contained"
      disabled={true}
    >
      {address}
    </SecondaryButton>
  );
};

export default Address;