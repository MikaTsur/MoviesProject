// C:\Users\morellyo\react_project\ex\client\src\components\SubscriptionsList.jsx ====
import { useSelector } from "react-redux";
import Subscription from "./Subscription";

const SubscriptionsList = () => {
  const subscriptions = useSelector((state) => state.subscriptions);

  return (
    <div>
      {subscriptions.map((subscription, index) => (
        <Subscription key={index} subscription={subscription} />
      ))}
    </div>
  );
};

export default SubscriptionsList;
