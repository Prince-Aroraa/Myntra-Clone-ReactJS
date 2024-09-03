import React from "react";
import BagHeader from "./BagHeader";
import HomeFooter from "./HomeFooter";
import BagCartLeftBlock from "./BagCartLeftBlock";
import BagCartRightBlock from "./BagCartRightBlock";
import { useSelector } from "react-redux";

function BagCart() {
  
  const bagItems = useSelector(store=>store.Bag);
  const items = useSelector(store=>store.items);
  const finalItems = items.filter(item=>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>=0;
  });

  return (
    <>
      <BagHeader />
      <main>
        <div className="cart_layout">
          <div className="left_block">
            <div className="cart_item_list">
              {finalItems.map(item=><BagCartLeftBlock key={item.id} item={item} />)}
            </div>

          </div>
          <BagCartRightBlock />
        </div>
      </main>
    </>
  );
}

export default BagCart;
