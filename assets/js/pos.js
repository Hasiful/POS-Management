// input icrement decrement

{
  let inreeBtn = document.getElementsByClassName("increement_quntity");
  let decreeBtn = document.getElementsByClassName("decrement_quntity");
  let quanInput = document.getElementsByClassName("quntity_input");

  //   input onchange
  [...quanInput].forEach((inputquan, index) => {
    inputquan.addEventListener("keyup", function () {
      productCount("wraiteInput", index);
      totaQuanT();
      subtotal();
      vatAll();
    });
  });

  // increment
  [...inreeBtn].forEach((plusBtn, index) => {
    plusBtn.addEventListener("click", function () {
      productCount(true, index);
      totaQuanT();
      subtotal();
      vatAll();
    });
  });

  // decrement

  // increment
  [...decreeBtn].forEach((minusBtn, index) => {
    minusBtn.addEventListener("click", function () {
      productCount(false, index);
      totaQuanT();
      subtotal();
      vatAll();
    });
  });

  function productCount(product, i) {
    let quanInput = document.getElementsByClassName("quntity_input")[i].value;
    // single quantity
    let quanNewValue = parseInt(quanInput);

    let totalPlus = quanNewValue;

    if (product == true) {
      totalPlus = quanNewValue + 1;
    } else if (product == false && quanNewValue > 0) {
      totalPlus = quanNewValue - 1;
    } else if (product == "wraiteInput") {
      if (quanInput == "") {
        document.getElementsByClassName("quntity_input")[i].value = 0;
        return;
      } else if (quanInput < 0) {
        document.getElementsByClassName("quntity_input")[i].value = 0;
        return;
      }
    }

    document.getElementsByClassName("quntity_input")[i].value = totalPlus;

    // pruduct price

    let productPrice =
      document.getElementsByClassName("product-price")[i].innerHTML;
    let productPriceNew = parseInt(productPrice);

    document.getElementsByClassName("price-subtotal")[i].innerHTML =
      productPriceNew * totalPlus;

    //   vat all
  }
}

// total quantity
{
  function totaQuanT() {
    let quanInput = document.getElementsByClassName("quntity_input");
    let totalQTYSum = 0;
    [...quanInput].forEach((inputquan) => {
      totalQTYSum = totalQTYSum + parseInt(inputquan.value);
      document.getElementById("totalQTY").innerText = totalQTYSum;
    });
  }
}

// subtotal

{
  function subtotal() {
    let priceSubTotal = document.getElementsByClassName("price-subtotal");
    let subTotalPrice = 0;
    [...priceSubTotal].forEach((subPrice) => {
      subTotalPrice = subTotalPrice + parseInt(subPrice.innerText);
      document.getElementById("cartSubTotal").innerText = subTotalPrice;
    });
  }
}

// vat calculator

{
  let vatInput = document.getElementsByClassName("vatInput");
  [...vatInput].forEach((currentItem) => {
    currentItem.addEventListener("keyup", function () {
      vatAll();
    });
  });

  function vatAll() {
    let subTotalInner = parseInt(
      document.getElementById("cartSubTotal").innerText
    );
    //TAX
    let tax = document.getElementById("cartTax").value;

    let subTotalTax = tax * (subTotalInner / 100);

    let newSubTotalTax = subTotalTax + subTotalInner;

    document.getElementById("cartTotalPrice").innerText = newSubTotalTax;

    // DISCOUNT

    let discount = document.getElementById("cartDiscount").value;
    let subTotalDis = newSubTotalTax - discount;
    document.getElementById("cartTotalPrice").innerText = subTotalDis;

    // SHIPPING
    let shiiping = document.getElementById("cartShipping").value;

    let shiipingall = Number(shiiping);

    let allTotalInCart = shiipingall + subTotalDis;

    document.getElementById("cartTotalPrice").innerText = allTotalInCart;
  }
}
