# stack
 
let obj = [
            { id: 1, title: "This is demo1!", desc: "desc" },
            { id: 2, title: "This is 2 demo2!", desc: "desc2" },
            { id: 3, title: "This is demo3!", desc: "desc3" },
            { id: 4, title: "This is demo4!", desc: "desc4" },
            { id: 5, title: "This is demo5!", desc: "desc5" },
            { id: 6, title: "This is demo6!", desc: "desc6" },
        ];
        let data = new Stack(obj);

        console.log(data.getWithPage(1));
        // data.get().map((element) => {
        //     console.log(element.id, element.title);
        // })
        // let search = data.search('demo1');
        // console.log(search);
        // console.log('search == ', search, data.has('id'));
        // data.remove(2)
        // data.remove(1)
        // let zero = data.getByIindex(0);
        // zero.title = "sd"
        // zero.desc = "sd"
        // data.update(0, zero)
        // console.log(data.get());
        // console.log(data.count());
        // let arr = ["1", "2ddg"];
        // let arrData = new Stack(arr);
        // console.log(arrData.get());
        // arrData.add("sdsd");
        // console.log(arrData.get());
        // arrData.update(2, "sssss");
        // console.log(arrData.get(), arrData.count());
        // arrData.remove(2);
        // console.log(arrData.get(), arrData.count(), arrData.getByIindex(1));
        // console.log(arrData.last());
        // console.log(arrData.first());
