using UnityEngine;
using UnityEngine.SceneManagement;

public class LoadGameScene : MonoBehaviour
{
    public void moveToGamesScene(){
        SceneManager.LoadScene("Games");
    }
     public void moveToMenuScene(){
        SceneManager.LoadScene("Menu");
    }
}
