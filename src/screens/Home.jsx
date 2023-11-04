import Product from "../components/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Bose SoundLink Revolve (Series II) Portable Bluetooth Speaker – Wireless Water-Resistant Speaker with 360° Sound, Black"
            price={150}
            image={
              "https://m.media-amazon.com/images/I/71fqr3NMdIL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            }
            rating={4}
          />
          <Product
            id="2"
            title="Razer Huntsman Mini 60% Gaming Keyboard: Fast Keyboard Switches - Linear Optical Switches - Chroma RGB Lighting - PBT Keycaps - Onboard Memory - Mercury White"
            price={115}
            image={
              "https://m.media-amazon.com/images/I/712e7S94B+L._AC_SX300_SY300_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="ASUS ROG Harpe Gaming Wireless Mouse, Ace Aim Lab Edition, 54g Ultra-Lightweight, 36,000 DPI Sensor, 5 Programmable Buttons, Tri-Mode Connectivity (2.4GHz RF, Bluetooth, Wired), ROG SpeedNova, White"
            price={102.24}
            image={
              "https://m.media-amazon.com/images/I/61hECIx54qL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            }
            rating={2}
          />
          <Product
            id="4"
            title="Razer Viper Ultimate Lightweight Wireless Gaming Mouse: Fastest Gaming Switches - 20K DPI Optical Sensor - Chroma Lighting - 8 Programmable Buttons - 70 Hr Battery - Classic Black"
            price={200}
            image={
              "https://m.media-amazon.com/images/I/6157EeRHinL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            }
            rating={3}
          />
          <Product
            id="5"
            title="ASUS ROG Strix Z790-E Gaming WiFi II LGA 1700(Intel 14th & 13th & 12th Gen)ATX gaming motherboard(DDR5,PCIe 5.0,2.5 Gb LAN,5XM.2 slots,PCIe 5.0 x16,WiFi 7,front-panel connector with PD 3.0 up to 30W)"
            price={400}
            image={
              "https://m.media-amazon.com/images/I/81doiK8qERL._AC_SX679_.jpg"
            }
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title={`SAMSUNG 49" Odyssey Neo G9 Series G95NA 4K UHD Curved Gaming Monitor, 240Hz, 1ms, Mini LED Display, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, White & Black`}
            price={1249}
            image={
              "https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SX679_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
