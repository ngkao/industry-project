import GameItem from "../../components/GameItem/GameItem"
import "./HomePage.scss"
import Celtics from "../../assets/logo/Boston_Celtics.svg.png"

export default function HomePage() {
  return (
    <section className="main">
        <div className="main__league-list">
            <p className="main__league-item">NFLF</p>
            <p className="main__league-item">TOP</p>
            <p className="main__league-item">NFL</p>
            <p className="main__league-item">NBA</p>
            <p className="main__league-item">NCAAF</p>
            <p className="main__league-item">MLB</p>
            <p className="main__league-item">NHL</p>
        </div>
        <div className="main__ctr">
            <div className="main__title-ctr">
              <h3 className="main__title">NBA</h3>
              <h3 className="main__title">Go to NBA</h3>
            </div>
            <GameItem
              team1="Celtic"
              image={Celtics}
            />
        </div>
    </section>
  )
}
