import { useParams } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import cssStyle from '../css/Detail.module.css';
import Count from '../components/Count';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';

export default function Detail({ productData }) {
  // 컨포넌트는
  // 1. 생성될 수 있고 (mount)
  // 2. 재 랜더링 될 수 있고 (update)
  // 3. 삭제될 수 있다. (unmount)
  //
  // class Detail extends React.Component{
  //   componentDidMount(){ 장착될 때 실행될 함수}
  //   componentDidUpdate(){ 업데이트 될 때 실행될 함수}
  //   componentWillUnmount(){ 컨포넌트가 제거될  때 실행되는 함수}
  // }
  let [open, setOpen] = useState(true);

  let { id } = useParams();
  let item = productData.find((a) => String(a._id) === id);
  let similar = productData.filter((a) => a.category === item.category);
  useEffect(() => {
    let timmer = setTimeout(() => {
      setOpen(false);
    }, 2000);
    return () => {
      setOpen(true);
      clearTimeout(timmer);
    };
  }, [id]);
  return (
    <main>
      {open && (
        <div
          style={{
            backgroundColor: 'green',
            color: 'white',
            textAlign: 'center',
            padding: '2rem 0',
          }}
        >
          2초 안에 클릭하시오
        </div>
      )}

      <div className={cssStyle.detailCon}>
        <div className={cssStyle.img}>
          <img src={`/img/${item.img}`} alt={item.title} />
        </div>
        <div className={cssStyle.desc}>
          <strong>{item.title}</strong>
          <span>{Number(item.price).toLocaleString()}원</span>
          <Count />
        </div>
      </div>
      <div style={{ padding: '50px 0' }}>
        <Tabs
          defaultActiveKey="Description"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Description" title="Description">
            <div>1 상품 상세정보 컨포넌트 들어가는 곳</div>
          </Tab>
          <Tab eventKey="information" title="Aditional information">
            <div>2 상품 기타정보 컨포넌트 들어가는 곳</div>
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            <div>리뷰 컨포넌트 들어가는 곳</div>
          </Tab>
        </Tabs>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        className={cssStyle.slide}
      >
        {similar.map((data) => (
          <SwiperSlide key={data._id}>
            <ProductCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
