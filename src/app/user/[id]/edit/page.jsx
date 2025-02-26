export default async function EditProfilePage(params) {
  const userID = await params;
  return (
    <div>
      <p>Edit Page</p>
      <form>
        <input type="hidden" name="id"></input>
        <input type="text" placeholder="New Username" name="name"></input>
        <input type="text" placeholder="About Me" name="user_info"></input>
      </form>
    </div>
  );
}
