import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Menu from './Menu';
import Careers from './Careers';
import Contact from './Contact';
import Catering from './Catering';
import Order from './Order';

import './App.css';

function App() {
  const test = <Home />
  return (
    <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />}/>
            <Route path="Catering" element={<Catering />}/>
            <Route path="/Careers" element={<Careers />}/>
            <Route path="/Contact%20Us" element={<Contact />}/>
            <Route path="/Order%20Delivery" element={<Order />}/>
          </Routes>
        </BrowserRouter>
      <div className="shadow-lg p-6">
      </div>
      <Footer />
    </div>
  );
}


function Footer() {
  return(
    <div className="grid p-6 place-items-center">
      <p>LaVilla Family Dining & Pizzeria</p>
      <p>Proud Member of</p>
      <img alt="Image of Flint & Genesee Chamber of Commerce logo" src="https://lh3.googleusercontent.com/L7INqfwDwtQQCYbVDCdmsyaNqhMnFU0ygvVQrAazk2Ow-GVmCFRTMKU0irz9iMvSjbz0gy8D8PX-zcWRlDe3o4YkjVMqTPmROzrZsYl23PJX0cn5ag5fd6qexKMxy-XJt8aj1ewqSUF374dD-Nw_lpFh4GOvXvTaXXgjJx9GNTnJ2Zg-j5mWwEEl5PPqY6ENcAVujkqt-vupd-F2y41NGRn12z9hJ9PAcWsyQ3CUraEu3FHm1vWyMbgVVBBcT4Cb3lNLeJFIESeflSpKMhSWXomzIqJ1jmaLLKtDVSxfVfRwFLzibcwEpPCM0xJSkmk1rNdlZ6JYsiw81tWDWGaiTJNtkEcbS1pfDR3Ejal-SiEFWxyW-3ndHrX-8y0KomZoWoQ7wMSIcPZfB1qKAGizNE6nb1YYNdSusgb3t98uJExD6rZGCJoKRA2EoW0rwqcI0TqLz9iDWAkMJwGsyZTR8YaLqxFRI1vR_MNdy_rR2HvKjca29WLhA1A5Lp3ueKXBzRMb8Z7SeU1f9Lt2dbWAs2P_Pz_eQ9kMGkDP4XLMEDKFc_7j6qSl46r63NAb7K6kCCBfIwtHgiOK0WvYKiF9fBRtUKoTfKVaEzTBnNmSyRjjrjvFJ5Qb07bZmeOa5vUNhFV9dggjVpwFsnbDp0P__cY6-cX920G3Sg2ddi4iWpFBjGwYzeqap3RgHSccPcMp4XqVUp8NZnDD-v4VWQiU3ODU=s200-no?authuser=0"/>
      <img className="scale-50" alt="Image of LaVilla logo" src="https://lh3.googleusercontent.com/bXuNw9lvcW9Qr5tp78lbHBh8fRPg7G7iW_Ke6URvVL42DNKWpFGNIt9fNHtLW3iqbMxz0rXLZafICB069sJfHC3oyNkfAkNuNoa8CJ-EIvXYaBn9ZSvl16BjH6xVXaCh_-kzmJbg_nzapINBsw8pCYjEDZLmGHmXikJYNbFQIkZfduCudds4j34U1XmlBFyo3B8vGp30EkVyUeS2VO1TmAzhAUXGXCrEjb0Se3wMkY9j10sVKk8x2r_zOQi6ZeeaTbXYjjmGKwpwoHQP3D2anNew6PmcPvLLGhSc-DdC0-QXSBoKlsUaEEnxDJkWOlUpWatwHqdXt6CZEnXqkZ3S9VTJ093twzFkBghIk3kUy6VRP0DK7HXKtQw_X8GFnkM8VXPQANDNlntCWIk3ZPcEvMufTnGE31eD9ss5bfTsxhr2TB9oUre4ysNsNTChCyNbP3y3AJWit0SGEYMIXEN8EH3eUUCG6Wakr3wjZbthuTpwsWDf36ZeO04lUaW6n5zD6MCE2jkcWdeeIJ-olPeZlHAZPyuLOSmqqhNHuq4LdEjV9m_3wI3UrwrjVvz6qnETfrmIujlQMu-bmnxW1cI1xj4-X7x9Sb0IAFRpaPyMJ41cGsCcqlX0e2BSMqAizY3MNEcAeRp5kFkCahl2PDm7KDmsHRVWWL6twcoOzzX76qy_gnNUU4bwBP8AYe7ZB2MJz-0fe04yHFREKQIXT_Wjkc3b=w841-h568-no?authuser=0" />
    </div>
  );
}
export default App;
