<template>
  <div class="">
    <div class="mb-10">
      <h1 class="mb-5">Newest Blog Posts</h1>
      <div class="grid grid-cols-3 gap-3">
        <div class="p-2" v-for="item in itemShow" :key="item.id">
          <router-link :to="{ name: 'detailItems', params: { id: item.id } }">
            <img :src="item.image" alt="" />
            <p class="font-normal">
              {{ item.title }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <h1 class="mb-5">Trending Recipes</h1>
      <div class="grid grid-cols-3 gap-3">
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2023/03/Feature-Photo-Perfect-Roasted-Eggplant-4-900x1200.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="mb-10">
      <h1 class="mb-5">Popular Breakfast Recipes</h1>
      <div class="grid grid-cols-3 gap-3">
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2023/03/Feature-Photo-Perfect-Roasted-Eggplant-4-900x1200.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
        <div class="p-2">
          <a href="">
            <img
              src="https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp"
              alt=""
            />
            <p class="font-normal">
              Mexican Shredded Chicken (Instant Pot + Crock Pot)
            </p>
          </a>
        </div>
      </div>
      <div class="text-center">
        <ButtonMore :title="'More Breakfast Recipes'" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import ButtonMore from "../components/ButtonMore/index.vue";
export default {
  name: "Home",
  components: { ButtonMore },
  setup() {
    const items = [
      {
        id: 1,
        title: "Mexican Shredded Chicken (Instant Pot + Crock Pot)",
        image:
          "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp",
        subtitles: [
          {
            subtitle: "Đây là công thức gà xé Mexico ngon nhất",
            desSubtitles: [
              {
                id_sub: 1,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 2,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 3,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 4,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
            ],
          },
        ],
        des: "Gà xé Mexico theo phong cách nhà hàng sạch sẽ, không có sữa, keto và ít carb. Không có gói, chất bảo quản, hoặc rác! Bắt chước nhà hàng Mexico yêu thích của bạn với món gà xé Mexico dễ dàng và sạch sẽ này.Bạn đã bao giờ muốn tái tạo món gà xé Mexico theo phong cách nhà hàng yêu thích của mình tại nhà chưa? Vâng, bây giờ bạn có thể với công thức dễ dàng và sạch sẽ này! Gia đình tôi là những người hâm mộ đồ ăn Mexico. Trên thực tế, đây có lẽ là danh mục công thức nấu ăn lớn nhất trên trang web của tôi vì tôi chỉ yêu thích hương vị hoặc ẩm thực Mexico. Tôi thậm chí đã nói đùa (nhưng nghiêm túc) về việc mua một ngôi nhà nghỉ dưỡng ở Mexico vào một ngày nào đó. Điều gì có thể tốt hơn đại dương và tacos? Ước mơ lớn, phải không?Mặc dù tôi đã có  một số công thức nấu gà Mexico, nhưng tôi không có công thức cơ bản “kiểu nhà hàng”. Và đó chính xác là công thức gà xé Mexico này. Bạn có thể sử dụng món gà xé Mexico này làm cơ sở cho bất cứ thứ gì mà trái tim nấu ăn sáng tạo của bạn gợi lên. ",
      },
      {
        id: 2,
        title: "Mexican Shredded Chicken (Instant Pot + Crock Pot)",
        image:
          "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp",
        subtitles: [
          {
            subtitle: "Đây là công thức gà xé Mexico ngon nhất",
            desSubtitles: [
              {
                id_sub: 1,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 2,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 3,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 4,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
            ],
          },
        ],
        des: "Gà xé Mexico theo phong cách nhà hàng sạch sẽ, không có sữa, keto và ít carb. Không có gói, chất bảo quản, hoặc rác! Bắt chước nhà hàng Mexico yêu thích của bạn với món gà xé Mexico dễ dàng và sạch sẽ này.Bạn đã bao giờ muốn tái tạo món gà xé Mexico theo phong cách nhà hàng yêu thích của mình tại nhà chưa? Vâng, bây giờ bạn có thể với công thức dễ dàng và sạch sẽ này! Gia đình tôi là những người hâm mộ đồ ăn Mexico. Trên thực tế, đây có lẽ là danh mục công thức nấu ăn lớn nhất trên trang web của tôi vì tôi chỉ yêu thích hương vị hoặc ẩm thực Mexico. Tôi thậm chí đã nói đùa (nhưng nghiêm túc) về việc mua một ngôi nhà nghỉ dưỡng ở Mexico vào một ngày nào đó. Điều gì có thể tốt hơn đại dương và tacos? Ước mơ lớn, phải không?Mặc dù tôi đã có  một số công thức nấu gà Mexico, nhưng tôi không có công thức cơ bản “kiểu nhà hàng”. Và đó chính xác là công thức gà xé Mexico này. Bạn có thể sử dụng món gà xé Mexico này làm cơ sở cho bất cứ thứ gì mà trái tim nấu ăn sáng tạo của bạn gợi lên. ",
      },
      {
        id: 3,
        title: "Mexican Shredded Chicken (Instant Pot + Crock Pot)",
        image:
          "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp",
        subtitles: [
          {
            subtitle: "Đây là công thức gà xé Mexico ngon nhất",
            desSubtitles: [
              {
                id_sub: 1,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 2,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 3,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 4,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
            ],
          },
        ],
        des: "Gà xé Mexico theo phong cách nhà hàng sạch sẽ, không có sữa, keto và ít carb. Không có gói, chất bảo quản, hoặc rác! Bắt chước nhà hàng Mexico yêu thích của bạn với món gà xé Mexico dễ dàng và sạch sẽ này.Bạn đã bao giờ muốn tái tạo món gà xé Mexico theo phong cách nhà hàng yêu thích của mình tại nhà chưa? Vâng, bây giờ bạn có thể với công thức dễ dàng và sạch sẽ này! Gia đình tôi là những người hâm mộ đồ ăn Mexico. Trên thực tế, đây có lẽ là danh mục công thức nấu ăn lớn nhất trên trang web của tôi vì tôi chỉ yêu thích hương vị hoặc ẩm thực Mexico. Tôi thậm chí đã nói đùa (nhưng nghiêm túc) về việc mua một ngôi nhà nghỉ dưỡng ở Mexico vào một ngày nào đó. Điều gì có thể tốt hơn đại dương và tacos? Ước mơ lớn, phải không?Mặc dù tôi đã có  một số công thức nấu gà Mexico, nhưng tôi không có công thức cơ bản “kiểu nhà hàng”. Và đó chính xác là công thức gà xé Mexico này. Bạn có thể sử dụng món gà xé Mexico này làm cơ sở cho bất cứ thứ gì mà trái tim nấu ăn sáng tạo của bạn gợi lên. ",
      },
      {
        id: 4,
        title: "Mexican Shredded Chicken (Instant Pot + Crock Pot)",
        image:
          "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp",
        subtitles: [
          {
            subtitle: "Đây là công thức gà xé Mexico ngon nhất",
            desSubtitles: [
              {
                id_sub: 1,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 2,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 3,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 4,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
            ],
          },
        ],
        des: "Gà xé Mexico theo phong cách nhà hàng sạch sẽ, không có sữa, keto và ít carb. Không có gói, chất bảo quản, hoặc rác! Bắt chước nhà hàng Mexico yêu thích của bạn với món gà xé Mexico dễ dàng và sạch sẽ này.Bạn đã bao giờ muốn tái tạo món gà xé Mexico theo phong cách nhà hàng yêu thích của mình tại nhà chưa? Vâng, bây giờ bạn có thể với công thức dễ dàng và sạch sẽ này! Gia đình tôi là những người hâm mộ đồ ăn Mexico. Trên thực tế, đây có lẽ là danh mục công thức nấu ăn lớn nhất trên trang web của tôi vì tôi chỉ yêu thích hương vị hoặc ẩm thực Mexico. Tôi thậm chí đã nói đùa (nhưng nghiêm túc) về việc mua một ngôi nhà nghỉ dưỡng ở Mexico vào một ngày nào đó. Điều gì có thể tốt hơn đại dương và tacos? Ước mơ lớn, phải không?Mặc dù tôi đã có  một số công thức nấu gà Mexico, nhưng tôi không có công thức cơ bản “kiểu nhà hàng”. Và đó chính xác là công thức gà xé Mexico này. Bạn có thể sử dụng món gà xé Mexico này làm cơ sở cho bất cứ thứ gì mà trái tim nấu ăn sáng tạo của bạn gợi lên. ",
      },
      {
        id: 5,
        title: "Mexican Shredded Chicken (Instant Pot + Crock Pot)",
        image:
          "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9370-1024x676.jpg.webp",
        subtitles: [
          {
            subtitle: "Đây là công thức gà xé Mexico ngon nhất",
            desSubtitles: [
              {
                id_sub: 1,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 2,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 3,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
              {
                id_sub: 4,
                desSubtitle:
                  "Hương vị giống như gà nhà của nhà hàng Mexico yêu thích của bạn",
                desImg:
                  "https://ketoinpearls.com/wp-content/uploads/2020/08/MG_9379-1024x1536.jpg.webp",
              },
            ],
          },
        ],
        des: "Gà xé Mexico theo phong cách nhà hàng sạch sẽ, không có sữa, keto và ít carb. Không có gói, chất bảo quản, hoặc rác! Bắt chước nhà hàng Mexico yêu thích của bạn với món gà xé Mexico dễ dàng và sạch sẽ này.Bạn đã bao giờ muốn tái tạo món gà xé Mexico theo phong cách nhà hàng yêu thích của mình tại nhà chưa? Vâng, bây giờ bạn có thể với công thức dễ dàng và sạch sẽ này! Gia đình tôi là những người hâm mộ đồ ăn Mexico. Trên thực tế, đây có lẽ là danh mục công thức nấu ăn lớn nhất trên trang web của tôi vì tôi chỉ yêu thích hương vị hoặc ẩm thực Mexico. Tôi thậm chí đã nói đùa (nhưng nghiêm túc) về việc mua một ngôi nhà nghỉ dưỡng ở Mexico vào một ngày nào đó. Điều gì có thể tốt hơn đại dương và tacos? Ước mơ lớn, phải không?Mặc dù tôi đã có  một số công thức nấu gà Mexico, nhưng tôi không có công thức cơ bản “kiểu nhà hàng”. Và đó chính xác là công thức gà xé Mexico này. Bạn có thể sử dụng món gà xé Mexico này làm cơ sở cho bất cứ thứ gì mà trái tim nấu ăn sáng tạo của bạn gợi lên. ",
      },
    ];
    const visibleItems = ref(3);

    const itemShow = computed(() => {
      return items.slice(0, visibleItems.value);
    });

    return {
      items,
      itemShow,
    };
  },
};
</script>

<style></style>
