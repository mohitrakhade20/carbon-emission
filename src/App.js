import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Market from "./screens/Market";
import LearnCrypto from "./screens/LearnCrypto";
import LearnCryptoDetails from "./screens/LearnCryptoDetails";
import Contact from "./screens/Contact";
import Notifications from "./screens/Notifications";
import Activity from "./screens/Activity";
import Exchange from "./screens/Exchange";
import WalletOverview from "./screens/WalletOverview";
import WalletOverviewDetails from "./screens/WalletOverviewDetails";
import WalletMargin from "./screens/WalletMargin";
import FiatAndSpot from "./screens/FiatAndSpot";
import DepositFiat from "./screens/DepositFiat";
import BuyCrypto from "./screens/BuyCrypto";
import SellCrypto from "./screens/SellCrypto";
import ProfileInfo from "./screens/ProfileInfo";
import Referrals from "./screens/Referrals";
import ApiKeys from "./screens/ApiKeys";
import SessionsAndLoginHistory from "./screens/SessionsAndLoginHistory";
import TwoFa from "./screens/TwoFa";
import ChangePassword from "./screens/ChangePassword";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import PageList from "./screens/PageList";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/market"
          render={() => (
            <Page>
              <Market />
            </Page>
          )}
        />
        <Route
          exact
          path="/learn-crypto"
          render={() => (
            <Page>
              <LearnCrypto />
            </Page>
          )}
        />
        <Route
          exact
          path="/learn-crypto-details"
          render={() => (
            <Page>
              <LearnCryptoDetails />
            </Page>
          )}
        />
        <Route
          exact
          path="/contact"
          render={() => (
            <Page>
              <Contact />
            </Page>
          )}
        />
        <Route
          exact
          path="/notifications"
          render={() => (
            <Page>
              <Notifications />
            </Page>
          )}
        />
        <Route
          exact
          path="/activity"
          render={() => (
            <Page>
              <Activity />
            </Page>
          )}
        />
        <Route
          exact
          path="/exchange"
          render={() => (
            <Page headerWide footerHide>
              <Exchange />
            </Page>
          )}
        />
        <Route
          exact
          path="/wallet-overview"
          render={() => (
            <Page headerWide footerHide>
              <WalletOverview />
            </Page>
          )}
        />
        <Route
          exact
          path="/wallet-overview/:id"
          render={() => (
            <Page headerWide footerHide>
              <WalletOverviewDetails />
            </Page>
          )}
        />
        <Route
          exact
          path="/wallet-margin"
          render={() => (
            <Page headerWide footerHide>
              <WalletMargin />
            </Page>
          )}
        />
        <Route
          exact
          path="/fiat-and-spot"
          render={() => (
            <Page headerWide footerHide>
              <FiatAndSpot />
            </Page>
          )}
        />
        <Route
          exact
          path="/profile-info"
          render={() => (
            <Page>
              <ProfileInfo />
            </Page>
          )}
        />
        <Route
          exact
          path="/deposit-fiat"
          render={() => (
            <Page>
              <DepositFiat />
            </Page>
          )}
        />
        <Route
          exact
          path="/buy-crypto"
          render={() => (
            <Page>
              <BuyCrypto />
            </Page>
          )}
        />
        <Route
          exact
          path="/sell-crypto"
          render={() => (
            <Page>
              <SellCrypto />
            </Page>
          )}
        />
        <Route
          exact
          path="/referrals"
          render={() => (
            <Page>
              <Referrals />
            </Page>
          )}
        />
        <Route
          exact
          path="/api-keys"
          render={() => (
            <Page>
              <ApiKeys />
            </Page>
          )}
        />
        <Route
          exact
          path="/sessions-and-login-history"
          render={() => (
            <Page>
              <SessionsAndLoginHistory />
            </Page>
          )}
        />
        <Route
          exact
          path="/2fa"
          render={() => (
            <Page>
              <TwoFa />
            </Page>
          )}
        />
        <Route
          exact
          path="/change-password"
          render={() => (
            <Page>
              <ChangePassword />
            </Page>
          )}
        />
        <Route
          exact
          path="/sign-in"
          render={() => (
            <Page headerHide footerHide>
              <SignIn />
            </Page>
          )}
        />
        <Route
          exact
          path="/sign-up"
          render={() => (
            <Page headerHide footerHide>
              <SignUp />
            </Page>
          )}
        />
        <Route
          exact
          path="/forgot-password"
          render={() => (
            <Page headerHide footerHide>
              <ForgotPassword />
            </Page>
          )}
        />
        <Route exact path="/pagelist" component={PageList} />
      </Switch>
    </Router>
  );
}

export default App;
