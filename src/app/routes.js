import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Socialicons } from "../components/socialicons";
import withRouter from "../hooks/withRouter";
import { About } from "../pages/about";
// import Chat from "../pages/chat/Chat";
import AIChat from "../pages/ai/AIChat";
import { ContactUs } from "../pages/contact";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import Resume from "../pages/resume/resume";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/ai" element={<AIChat />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
