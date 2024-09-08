class GitHub {
  constructor() {
    this.client_id = "53c6d50ddddfb2cb9496";
    this.client_secret = "8bf24a9ae415e5fe037e3601699b91e95c677fd3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return {
      profile: profileData,
      repos: reposData,
    };
  }
}
