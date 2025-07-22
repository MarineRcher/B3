using UnityEngine;
using UnityEngine.InputSystem;
using TMPro;

public class Clicker : MonoBehaviour
{
    private GameObject player;
    private Camera playerCamera;
    private TextMeshProUGUI scoreText;
    private int score = 0;
    
    void Start()
    {
        playerCamera = GameObject.Find("CameraPlayer").GetComponent<Camera>();
        scoreText = GameObject.Find("ScoreText").GetComponent<TextMeshProUGUI>();
    }
    
    void Update()
    {
        Mouse mouse = Mouse.current;
        if (mouse != null && mouse.leftButton.wasPressedThisFrame)
        { 
            
            Ray ray = playerCamera.ScreenPointToRay(new Vector3(Screen.width / 2f, Screen.height / 2f, 0)); 
            if (Physics.Raycast(ray, out RaycastHit hit))
            {
                if(hit.collider.CompareTag("cible"))
                {
                    AddScore();
                    Destroy(hit.collider.gameObject);
                    
                }
            }
        }
    }

    void AddScore(){
        score += 1;
        scoreText.text = "Score: " + score.ToString();
    }
}