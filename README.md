# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/08905382-2c56-4467-93de-25238db23876

## Project Description

## 用户旅程图

```mermaid
flowchart TD
    A[Header<br/>链选择<br/>平台选择<br/>Sign Up/Log In]:::header
    B[主导航栏<br/>Trenches]:::nav
    C[Index Trenches 区域<br/>Token List/Token Card]:::main
    E[My Wallet 钱包页]:::wallet
    D[CopyTrade 面板]:::panel

    A -- 点击 Sign Up/Log In --> F[弹窗：Sign Up/Log In]
    A -- 选择链/平台 --> A
    B -- 点击 Trenches --> C
    A -- 登录后点击 My Wallet --> E
    E -- 点击 CopyTrade --> D

    classDef header fill:#e0f7fa,stroke:#00796b,stroke-width:2px;
    classDef nav fill:#fffde7,stroke:#fbc02d,stroke-width:2px;
    classDef main fill:#e8f5e9,stroke:#388e3c,stroke-width:2px;
    classDef panel fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef wallet fill:#fbe9e7,stroke:#d84315,stroke-width:2px;
```

**交互点说明：**
- Header：链选择、平台选择、Search、Sign Up/Log In 按钮
- 主导航栏：Trenches
- Index Trenches 区域：Token 列表、Token 卡片
- CopyTrade 面板：仅实现 Copy Sell 与 No Sell
- My Wallet 钱包页：查看钱包状态

## UX 示例
![index](public/ux.jpg)
![signUp](public/ux_1.jpg)
![wallet](public/ux_2.jpg)
![wallet manage](public/ux_3.jpg)
![copyTrade](public/ux_4.jpg)

时间有限，其余 ui/ux 暂未实现

### Deploy

1. 构建项目：

```bash
npm run build
```

2. 部署
```bash
npm run deploy
```

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/08905382-2c56-4467-93de-25238db23876) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/08905382-2c56-4467-93de-25238db23876) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
