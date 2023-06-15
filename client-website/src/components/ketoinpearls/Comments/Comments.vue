<template>
  <div>
    <h2>2 Comments on: tên công thức món ăn</h2>
    <!-- <div class="flex items-center text-[18px]">
      <label for="" class="text-[18px]"> Recipe Rating </label>
      <span class="ml-2">
        <StarRating
          :star-size="23"
          :increment="0.5"
          :active-color="['red', 'black']"
          :border-color="'#333'"
        />
      </span>
    </div> -->
    <form action="" @submit="onSubmitComment">
      <textarea
        ref="textComments"
        name="content"
        id="content"
        rows="5"
        required
        class="w-full max-w-[728px] border border-[#e1e1e1] rounded-t"
        placeholder="Write your comment ......"
      ></textarea>
      <div
        class="p-[25px] bg-[#fafafa] mt-[-9px] border border-[#e1e1e1] rounded"
      >
        <div class="flex items-center justify-between">
          <div class="w-full mr-5">
            <input
              type="text"
              ref="nameInput"
              placeholder="Name"
              class="w-full border border-[#e1e1e1] rounded"
              required
            />
          </div>
          <div class="w-full mr-5">
            <input
              type="email"
              ref="emailInput"
              placeholder="Email"
              class="w-full border border-[#e1e1e1] rounded"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-[#4b4266] text-white py-[6px] px-5 rounded hover:bg-slate-300 hover:text-black hover:transition-all"
          >
            Comment
          </button>
        </div>
      </div>
    </form>
    <div
      class="border border-[#e1e1e1] rounded mt-5 p-3"
      v-for="user in usersCmt"
      :key="user.id"
    >
      <div class="flex items-center mb-5">
        <div class="rounded-full overflow-hidden mr-3">
          <img
            src="https://secure.gravatar.com/avatar/3a6bdb9c4055695ff66155628f72ea6c?s=48&d=blank&r=g"
            width="50"
            height="50"
            alt=""
          />
        </div>
        <div>
          <p class="text-[#1e1e1e] font-bold text-[1.125rem]">
            {{ user.nameUser }}
          </p>
          <p class="text-[1rem]">April 15, 2023 at 09:33 PM</p>
        </div>
      </div>
      <!-- <div>
        <p class="text-lg mb-8">
          <StarRating :rating="4" :star-size="20" :read-only="true" />
          {{ user.cmt }}
        </p>
      </div> -->
      <button class="text-base text-blue-500" @click="handleOpenReply(user.id)">
        <font-awesome-icon icon="fa-solid fa-reply" beat-fade />
        Reply
      </button>
      <form
        action=""
        v-if="activeReplyIndex === user.id"
        class="transition-all duration-[3000s] ease-in-out"
      >
        <textarea
          name="content"
          id="content"
          rows="5"
          required
          class="w-full max-w-[728px] border border-[#e1e1e1] rounded-t"
          placeholder="Write your comment ......"
          v-model="replyUser"
        ></textarea>
        <div
          class="p-[25px] bg-[#fafafa] mt-[-9px] border border-[#e1e1e1] rounded"
        >
          <div class="flex items-center justify-between">
            <div class="w-full mr-5">
              <input
                type="text"
                placeholder="Name"
                class="w-full border border-[#e1e1e1] rounded"
                required
              />
            </div>
            <div class="w-full mr-5">
              <input
                type="email"
                placeholder="Email"
                class="w-full border border-[#e1e1e1] rounded"
                required
              />
            </div>
            <button
              class="bg-[#4b4266] text-white py-[6px] px-5 rounded hover:bg-slate-300 hover:text-black hover:transition-all"
            >
              Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const usersCmt = ref([
  {
    id: 1,
    nameUser: "Duy",
    cmt: "Rất tuyệt nhưng tôi không biết nấu ăn",
  },
  {
    id: 2,
    nameUser: "Giang",
    cmt: "Rất tuyệt nhưng tôi không biết nấu ăn bao giờ",
  },
  {
    id: 3,
    nameUser: "Duy Linh",
    cmt: "Rất tuyệt nhưng tôi học làm món ăn này",
  },
  {
    id: 4,
    nameUser: "Đại",
    cmt: "Rất tuyệt tôi rất muốn ai đó nấu ăn cho tôi",
  },
]);

const replyUser = ref("");
const activeReplyIndex = ref(null);
const textComments = ref(null);
const nameInput = ref(null);
const emailInput = ref(null);

const handleOpenReply = (index) => {
  console.log(index);
  //showFormReply.value = !showFormReply.value;
  activeReplyIndex.value = activeReplyIndex.value === index ? null : index;
  console.log(usersCmt.value[index].nameUser);
  replyUser.value =
    activeReplyIndex.value === index
      ? `@${usersCmt.value[index - 1].nameUser}, `
      : "";
};

const onSubmitComment = (event) => {
  event.preventDefault();
  const comment = textComments.value.value;
  const name = nameInput.value.value;
  const email = emailInput.value.value;

  console.log(comment);
  console.log(name);
  console.log(email);

  nameInput.value.value = "";
  emailInput.value.value = "";
  textComments.value.value = "";
};
</script>

<style></style>
