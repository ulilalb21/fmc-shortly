<template>
  <nav class="fixed z-10 w-full bg-white">
    <div class="container px-6 pb-4 pt-8 md:mx-auto md:pb-8 xl:px-0">
      <div class="relative flex items-center justify-between">
        <div class="flex items-center gap-8">
          <NuxtImg src="/images/logo.svg" alt="shortly logo" class="h-8" />
          <div class="hidden gap-2 text-gray-500 lg:flex">
            <UButton
              v-for="nav in topNav"
              :key="nav"
              variant="link"
              size="md"
              color="white"
              to="#"
              :ui="{
                font: 'font-semibold',
                color: {
                  white: {
                    link: 'hover:text-gray-700',
                  },
                },
              }"
            >
              {{ nav }}
            </UButton>
          </div>
        </div>
        <div class="hidden gap-4 text-gray-500 lg:flex lg:items-center">
          <div class="mt-2 border-t border-gray-600 lg:hidden" />
          <UButton
            class="mt-2"
            variant="link"
            size="md"
            color="white"
            to="#"
            :ui="{
              font: 'font-semibold',
              color: {
                white: {
                  link: 'hover:text-gray-700',
                },
              },
            }"
          >
            Login
          </UButton>
          <UButton
            color="cyan"
            class="mt-2"
            size="md"
            :ui="{
              font: 'font-semibold',
              rounded: 'rounded-full',
              padding: {
                base: 'py-4',
              },
            }"
          >
            Sign Up
          </UButton>
        </div>

        <OnClickOutside @trigger="showNav = false" class="lg:hidden">
          <UIcon
            name="i-heroicons-bars-3"
            class="h-10 w-10 cursor-pointer text-gray-400 lg:hidden"
            @click="showNav = !showNav"
          />
          <div
            :class="{ hidden: !showNav }"
            class="absolute left-0 top-14 w-full rounded-md bg-[#35323e] p-4 pb-8 text-center text-sm font-semibold text-white"
          >
            <UButton
              v-for="nav in topNav"
              :key="nav"
              block
              variant="link"
              size="md"
              color="white"
              to="#"
              class="mt-2"
            >
              {{ nav }}
            </UButton>
            <div class="mt-2 border-t border-gray-600" />
            <UButton
              class="mt-2"
              block
              variant="link"
              size="md"
              color="white"
              to="#"
            >
              Login
            </UButton>
            <UButton
              class="mt-2"
              block
              size="md"
              :ui="{
                font: 'font-semibold tracking-wider',
                rounded: 'rounded-full',
                padding: {
                  base: 'py-4',
                },
              }"
            >
              Sign Up
            </UButton>
          </div>
        </OnClickOutside>
      </div>
    </div>
  </nav>
  <main class="pt-[104px]">
    <section
      class="container mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:px-6 lg:pb-28 xl:px-0"
    >
      <NuxtImg
        src="/images/illustration-working.svg"
        alt="illustration"
        class="h-[350px] w-full overflow-hidden object-cover object-left pl-6 md:h-[550px] lg:h-full lg:w-full lg:overflow-auto lg:p-0"
      />
      <section
        class="bg-white px-4 pb-40 text-center lg:w-4/5 lg:p-0 lg:text-left"
      >
        <h2
          class="mt-10 text-5xl font-bold tracking-tighter text-gray-700 lg:text-7xl"
        >
          More than just shorter links
        </h2>
        <p class="mb-8 mt-4 text-lg font-medium text-gray-400">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <UButton
          to="#shorten-link"
          class="text-white"
          size="xl"
          color="cyan"
          :ui="{
            font: 'font-semibold tracking-wider',
            rounded: 'rounded-full',
            size: {
              xl: 'text-lg',
            },
            padding: {
              xl: 'py-4 px-10',
            },
          }"
          >Get Started</UButton
        >
      </section>
    </section>
    <section class="relative bg-gray-100 px-6 text-center">
      <section
        id="shorten-link"
        class="absolute -top-20 left-1/2 w-[calc(100vw-3rem)] -translate-x-1/2 scroll-mt-24 rounded-xl bg-[#35323e] bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-no-repeat p-6 md:-top-14 md:bg-[url('/images/bg-shorten-desktop.svg')] md:p-8"
      >
        <UForm
          ref="form"
          class="md:flex md:flex-row md:items-start md:gap-4"
          @submit="submitLink"
          :state="state"
          :validate="validate"
          :validate-on="['submit']"
        >
          <UFormGroup name="link" class="text-left italic md:basis-2/3">
            <UInput
              class="w-full"
              placeholder="Shorten a link here..."
              color="white"
              variant="outline"
              size="xl"
              :ui="{
                variant: {
                  outline: 'bg-white placeholder-{color}-300',
                },
              }"
              v-model="state.link"
            />
          </UFormGroup>
          <UButton
            color="cyan"
            type="submit"
            block
            class="mt-4 md:mt-0 md:basis-1/3"
            size="lg"
            :ui="{
              font: 'font-semibold tracking-wider',
              size: {
                lg: 'text-lg',
              },
              padding: {
                lg: 'py-2 px-10',
              },
            }"
          >
            Shorten It!
          </UButton>
        </UForm>
      </section>
      <div v-if="links.length" class="pt-20 text-left text-lg font-semibold">
        <div
          v-for="link in links"
          :key="link.result"
          class="mt-6 rounded-lg bg-white lg:flex lg:flex-row lg:items-center lg:p-6"
        >
          <div class="border-b p-4 lg:basis-2/3 lg:border-b-0 lg:p-0">
            <div class="line-clamp-1">
              {{ link.source }}
            </div>
          </div>
          <div class="px-4 pb-4 pt-4 lg:basis-1/3 lg:p-0">
            <a
              :href="link.result"
              target="_blank"
              class="line-clamp-1 block text-cyan-500 hover:underline hover:decoration-cyan-500"
            >
              {{ link.result }}
            </a>
            <UseClipboard
              :source="link.result"
              v-slot="{ copied, copy, isSupported }"
            >
              <UButton
                color="cyan"
                block
                size="lg"
                :class="copied ? 'bg-gray-700 hover:bg-gray-600' : ''"
                class="mt-3 font-semibold tracking-wide"
                @click="copy()"
                :disabled="!isSupported"
              >
                {{ copied ? "Copied!" : "Copy" }}
              </UButton>
            </UseClipboard>
          </div>
        </div>
      </div>
      <div :class="links.length ? 'pt-14' : 'pt-32'" class="pb-20">
        <h2 class="text-3xl font-bold tracking-tighter text-gray-700">
          Advanced Statistics
        </h2>
        <p class="text-md mt-6 font-medium text-gray-400">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div
        id="brand-recognition"
        class="relative mb-20 rounded-lg bg-white px-6 pb-10 pt-16"
      >
        <div
          class="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-gray-700"
        >
          <NuxtImg
            class="w- absolute left-1/2 top-1/2 h-9 -translate-x-1/2 -translate-y-1/2 transform"
            src="/images/icon-brand-recognition.svg"
            alt="brand-recognition"
          />
        </div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-700">
          Brand Recognition
        </h2>
        <p class="text-md mt-4 font-medium text-gray-400">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
        <div
          class="absolute -bottom-12 left-1/2 h-12 w-2 -translate-x-1/2 bg-cyan-500"
        />
      </div>
      <div
        id="detailed-records"
        class="relative mb-20 rounded-lg bg-white px-6 pb-10 pt-16"
      >
        <div
          class="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-gray-700"
        >
          <NuxtImg
            class="w- absolute left-1/2 top-1/2 h-9 -translate-x-1/2 -translate-y-1/2 transform"
            src="/images/icon-detailed-records.svg"
            alt="detailed-records"
          />
        </div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-700">
          Detailed Records
        </h2>
        <p class="text-md mt-4 font-medium text-gray-400">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
        <div
          class="absolute -bottom-12 left-1/2 h-12 w-2 -translate-x-1/2 bg-cyan-500"
        />
      </div>
      <div
        id="fully-customizable"
        class="relative mb-20 rounded-lg bg-white px-6 pb-10 pt-16"
      >
        <div
          class="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-gray-700"
        >
          <NuxtImg
            class="w- absolute left-1/2 top-1/2 h-9 -translate-x-1/2 -translate-y-1/2 transform"
            src="/images/icon-fully-customizable.svg"
            alt="fully-customizable"
          />
        </div>
        <h2 class="text-2xl font-bold tracking-tight text-gray-700">
          Fully Customizable
        </h2>
        <p class="text-md mt-4 font-medium text-gray-400">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
      <div>&nbsp</div>
    </section>
    <section
      class="bg-[#35323e] bg-[url('/images/bg-boost-mobile.svg')] bg-cover bg-right-top bg-no-repeat py-20 text-center md:bg-[url('/images/bg-boost-desktop.svg')]"
    >
      <h2 class="text-2xl font-bold text-white">Boost your links today</h2>
      <UButton
        color="cyan"
        to="#shorten-link"
        class="mt-6 text-white"
        size="xl"
        :ui="{
          font: 'font-semibold tracking-wider',
          rounded: 'rounded-full',
          size: {
            xl: 'text-lg',
          },
          padding: {
            xl: 'py-4 px-10',
          },
        }"
        >Get Started</UButton
      >
    </section>
    <footer class="bg-gray-800 py-12 text-center text-white">
      <svg
        id="shorty-logo"
        class="mx-auto mb-12 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="121"
        height="33"
      >
        <path
          d="M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"
        />
      </svg>
      <div class="flex flex-col gap-9">
        <div v-for="(links, key) in footerLinks">
          <h4 class="mb-5 font-bold">
            {{
              key
                .replace(/_/g, " ")
                .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
            }}
          </h4>
          <a
            href="#"
            v-for="link in links"
            class="mb-2 block text-gray-400 hover:text-gray-300"
            >{{ link }}</a
          >
        </div>
      </div>
      <div class="mt-8 flex w-full justify-center gap-7">
        <NuxtImg
          class="h-6 w-6 cursor-pointer"
          v-for="link in socialLinks"
          :alt="link"
          :src="`/images/icon-${link}.svg`"
        />
      </div>
    </footer>
  </main>
</template>

<script lang="ts" setup>
import type { FormError, FormErrorEvent, FormSubmitEvent } from "#ui/types";
import { OnClickOutside, UseClipboard } from "@vueuse/components";

const footerLinks = {
  Features: ["Link Shortening", "Branded Links", "Analytics"],
  Resources: ["Blog", "Developers", "Support"],
  Company: ["About", "Our Team", "Careers", "Contact"],
};
const socialLinks = ["facebook", "twitter", "pinterest", "instagram"];
const topNav = ["Features", "Pricing", "Resources"];

const showNav = ref(false);
watch(showNav, () => {
  console.log(showNav.value);
});

const form = ref();
const state = reactive({
  link: "",
});
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.link) errors.push({ path: "link", message: "Please add a link" });
  return errors;
};

async function submitLink(event: Event) {
  try {
    const { result_url: result } = await $fetch("/api/shorten", {
      method: "POST",
      body: {
        url: state.link.trim(),
      },
    });
    links.value.unshift({ source: state.link, result });
    localStorage.setItem("fmc-shortly", JSON.stringify(links.value));

    state.link = "";
  } catch (error) {
    if (error && error.statusCode === 400) {
      form.value.setErrors([
        {
          path: "link",
          message: "Invalid URL",
        },
      ]);
      return;
    }
    form.value.setErrors([
      {
        path: "link",
        message: "Something went wrong",
      },
    ]);
  }
}

type ShortenedLink = { source: string; result: string };
const links = ref<ShortenedLink[]>([]);
onMounted(() => {
  links.value = JSON.parse(localStorage.getItem("fmc-shortly") || "[]");
});
</script>
<style>
body {
  @apply font-['Poppins'];
}
h2 {
  @apply text-gray-800;
}
</style>
