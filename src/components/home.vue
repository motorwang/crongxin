<template>
  <el-container>
    <el-header>
        <div class="header">
            <div class="logo">
                <a href="index.html">
                    <img class="logo" src="../assets/images/logo_1.png" width="160" alt="" title="中科融信">
                </a>
            </div>
            <ul class="menu_list">
                <li>
                    <a href="company.html">
                    <i class="c_line"></i>公司信息</a>
                </li>
                <li>
                    <a href="news.html">
                    <i class="s_line"></i>
                    <i class="c_line"></i>企业动态</a>
                </li>
                <li>
                    <a href="system.html">
                    <i class="s_line"></i>
                    <i class="c_line"></i>公司体系</a>
                </li>
                <li>
                    <a href="contact.html">
                    <i class="s_line"></i>
                    <i class="c_line"></i>联系我们</a>
                </li>
            </ul>
        </div>
    </el-header>

    <el-main>主页</el-main>

    <el-footer>底部</el-footer>

  </el-container>
</template>

<script>
  export default {}
</script>

<style>
    .el-header {
        height: 80px;
        line-height: 80px;
        background-color: #0353b2;
        position: relative;
        overflow: hidden;
    }
    .header {
        width: 1200px;
        margin: 0 auto;
    }
    .logo {
        float: left;
    }
    .el-header .menu_list {
        float: right;
        overflow: hidden;
    }
    .el-header li {
        float: left;
    }
    .el-header li a {
        height: 80px;
        display: block;
        color: #fff;
        padding: 0 30px;
    }

</style>