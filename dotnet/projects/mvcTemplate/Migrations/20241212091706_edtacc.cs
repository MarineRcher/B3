using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mvc.Migrations
{
    /// <inheritdoc />
    public partial class edtacc : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PersonalWebSite",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "Teach",
                table: "AspNetUsers",
                newName: "Major");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Major",
                table: "AspNetUsers",
                newName: "Teach");

            migrationBuilder.AddColumn<string>(
                name: "PersonalWebSite",
                table: "AspNetUsers",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
