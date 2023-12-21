<template>
  <div class="AppMem max-w-4xl md:mx-10 lg:mx-20 mx-auto mt-10 mb-10">
    <table class="table table-auto w-full">
      <tbody>
        <tr>
          <td class="colum-cel p-4 text-white bg-black">
            <RouterLink to="#" class="m-4"
              >Stand for us in a Local Election</RouterLink
            >
          </td>
          <td class="colum-cel p-4 text-white bg-gray">
            <RouterLink to="#" class="m-4">
                Stand for us in a General Election
            </RouterLink>
          </td>
        </tr>
        <tr>
          <td class="colum-cel p-4 text-white bg-blue-800">
            <RouterLink to="#" class="m-4">
                Become a Regional Organiser
            </RouterLink>
          </td>
          <td class="colum-cel p-4 text-white bg-blue-300">
            <RouterLink to="#" class="m-4">
                Become a Member ($25)
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.colum-cel {
  
  border: 1px double white;
  border-collapse: collapse;
  padding: 35px;
  font-weight: bold;
  font-size: 22px;
}
</style>
