import { SecondaryButton } from "@ggvigroup/component-library";

const DisconnectButton = ({ onClick }) => {

  return (
    <SecondaryButton
      variant="contained"
      onClick={onClick}
    >
      Disconnect
    </SecondaryButton>
  );
};

export default DisconnectButton;