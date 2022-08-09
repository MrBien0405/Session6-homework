//Bài tập:
//1:Khởi tạo một biến có tên sản phẩm, chứa một mảng sản phẩm, mỗi sản phẩm có tên, giá, thương hiệu, danh mục và màu sắc
let products = [
    {name: "Sony Xperia XZ Premium",
    Brand: "Sony",
    Price: "4428",
    Color: "White",
    Category: "Charger",
    },
    {name: "OPPO F3 Plus",
    Brand: "OPPO ",
    Price: "5487",
    Color: "WBlack",
    Category: "Phone",
    },
    {
    name: "IPhone 13 Pro max",
    Brand: "Apple",
    Price: "21490",
    Color: "Gray",
    Category: "Phone",
    },
    {
    name: "Samsung Galaxy S8",
    Brand: "Samsung",
    Price: "8490",
    Color: "Blue",
    Category: "Phone",
    },
];
//1.1In name và price của tất cả các sản phẩm
// for(let i = 0; i< products.length; i++){
// console.log(`Name: ${products[i].name}`);
// console.log(`Price: ${products[i].Price}`);
// console.log("-------------------------");
// }
//1.2Viết script in / đăng xuất sản phẩm với số của chúng,
//  sau đó in / đăng xuất thông tin chi tiết của sản phẩm với vị trí của sản phẩm do người dùng nhập
// let userInput = Number(prompt("Enter products position"));
// console.log(`Name: ${products[userInput].name}`);
// console.log(`Brand: ${products[userInput].Brand}`);
// console.log(`Price: ${products[userInput].Price}`);
// console.log(`Color: ${products[userInput].Color}`);
// console.log(`Category: ${products[userInput].Category}`);
// console.log("-------------------------------------");

//1.3:Viết tập lệnh in các sản phẩm dựa trên danh mục do người dùng nhập
// let userInput = prompt("nhập danh mục");
// for (let i = 0; i < products.length; i++) {
//     if (userInput == products[i].Category) {
//         console.log(`Name: ${products[i].name}`);
//         console.log(`Price: ${products[i].Price}`);
//         console.log("--------------------------------");
//     }
// }
//1.4 Thêm nhà cung cấp vào từng sản phẩm
products[0].providers="Phukienso";
products[1].providers="Tgdd";
products[2].providers="Tgdd";
products[3].providers="Tgdd";
console.log(products);
//1.5Tùy chọn) Tìm kiếm sản phẩm dựa trên nhà cung cấp mong muốn do người dùng nhập,
//  nếu bạn cần thêm hướng dẫn, hãy tìm gợi ý ở cuối bài tập này
let userInput = prompt("sản phẩm nhà cung cấp mong muốn");
for (let i = 0; i < products.length; i++) {
    if (userInput == products[i].providers) {
        console.log(`Name: ${products[i].name}`);
        console.log(`Brand: ${products[i].Brand}`);
        console.log(`Price: ${products[i].Price}`);
        console.log(`Color: ${products[i].Color}`);
        console.log(`Category: ${products[i].Category}`);
        console.log(`Providers: ${products[i].providers}`);
        console.log("--------------------------------");

    }
}
//
//
//Bài 2:Viết kịch bản để lưu trữ và xử lý các nhiệm vụ học tập
//2.1 In ra man hình
// let arr = [
//     ["HTML",
//     "false",
//     ],
//     ["CSS",
//     "false",
//     ],
//     ["Javascript",
//     "false",
//     ],
//     ["Node Package Mannager",
//     "false",
//     ],
//     ["Git",
//     "false"]
// ]


