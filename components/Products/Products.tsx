import Image from "next/image";

import startIcon from "../../public/images/star.svg";
import addIcon from "../../public/images/add.svg";

const Products = ({addToCart, hideCategoryName, categoryName, products, width, gap}: any) => {
  console.log("prod", products)
  return (
    <div>
      <div className="flex flex-wrap  mt-10">
        <div className={` ml-10 w-[${width}]`}>
          {!hideCategoryName && (
            <div className="flex pl-12">
              <h1 className="text-3xl mb-4 font-unica w-[80%]">
                {categoryName}
              </h1>
              <br />
            </div>
          )}
          <div
            className={`flex flex-wrap ${
              gap ? "gap-x-28, justify-start" : "gap-x-0, justify-start"
            }`}
          >
            {products? (
              Object.keys(products).map((product: any) => {
                console.log("hsa",product[Object.keys(product)[0]].name)
                return (
                  <div
                    key={product[Object.keys(product)[0]].id}
                    className="lg:w-auto md:w-auto p-4 w-full"
                  >
                    <div className="">
                      <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem] items-end">
                        <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                          <div className="flex bg-[#F5F8FA] ">
                            <Image src={startIcon} alt={"Icon"} />
                            <p className="ml-2 font-comfortaa text-[14px]">
                              4.6
                            </p>
                          </div>
                          <button>
                            <Image
                              onClick={() =>
                                addToCart("2", "", 1, 250, "UNIGMA")
                              }
                              src={addIcon}
                              alt={"Icon"}
                              className="rounded-full"
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                      </div>
                      <p className="font-comfortaa">{product[Object.keys(product)[0]].name}</p>
                      <p className="font-thin font-comfortaa text-[#687B8B]">
                        Name of selling party
                      </p>
                      <p className="font-comforta text-xl text-[#1C1F22]">
                        {product[Object.keys(product)[0]].price}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No Products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
